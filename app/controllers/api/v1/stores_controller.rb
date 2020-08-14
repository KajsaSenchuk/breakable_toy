class Api::V1::StoresController < ApplicationController
  def index
    render json: Store.all.order("name")
  end

  def show
    @store = Store.find(params[:id])
    render json: @store, serializer: StoreShowSerializer
  end
end