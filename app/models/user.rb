class User < ApplicationRecord
  validates :name, :password, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validate :username, uniqueness: true

  after_initialize :ensure_session_token

  def password=password
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end

  def reset_session_token
    self.session_token = SecureRandom.base64
    self.save
    self.session_token
  end
end
