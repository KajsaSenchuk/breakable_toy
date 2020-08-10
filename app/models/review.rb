class Review < ApplicationRecord
  validates :username, presence: true
  validates :rating, presence: true
  validates :comment, length: { maximum: 500 }

  belongs_to :user
  belongs_to :store
end