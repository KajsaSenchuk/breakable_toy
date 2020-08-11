class Api::V1::StoresController < ApplicationController
  def index
    render json: Store.all.order("name")
  end

  def show
    # render json: Store.find(params[:id]), serializer: StoreShowSerializer
    @store = Store.find(params[:id])
    @reviews = @store.reviews
    render json: { storeData: @store, reviewsData: @reviews, serializer: StoreShowSerializer }
  end
end