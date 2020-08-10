class Api::V1::StoresController < ApplicationController
  def index
    render json: Store.all.order("name")
  end

  def show
    render json: Store.find(params[:id]), serializer: StoreShowSerializer
  end
end