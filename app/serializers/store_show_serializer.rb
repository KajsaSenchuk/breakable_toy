class StoreShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :description ,:address, :website_link
end