class Store < ApplicationRecord
  validates :name, presence: true 
  validates :img_url, presence: true
  validates :category, presence: true
  validates :description, presence: true
end
