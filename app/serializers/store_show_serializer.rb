class StoreShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :category, :description ,:address, :website_link

  has_many :reviews
end