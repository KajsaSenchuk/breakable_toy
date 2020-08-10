require "rails_helper"

RSpec.describe Api::V1::StoresController, type: :controller do
  let!(:first_store) { Store.create(
    name:"Test Store 1",
    img_url:"https://www.google.com",
    category:"Store",
    description:"Test Store 1 description",
    address:"Test Ave. City 0000",
    website_link:"https://www.teststore1.com"
  ) }
  let!(:second_store) { Store.create(
    name:"Test Store 2",
    img_url:"https://www.google.com",
    category:"Store",
    description:"Test Store 2 description",
    address:"Test Ave. City 0000",
    website_link:"https://www.teststore2.com"
  ) }

  describe "GET#index" do
    it "should return a list of all the stores" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["stores"].length).to eq 2
      
      expect(returned_json["stores"][0]["name"]).to eq "Test Store 1"
      expect(returned_json["stores"][0]["img_url"]).to eq "https://www.google.com"
      expect(returned_json["stores"][0]["category"]).to eq "Store"
      expect(returned_json["stores"][0]["description"]).to eq "Test Store 1 description"
      expect(returned_json["stores"][0]["address"]).to eq "Test Ave. City 0000"
      expect(returned_json["stores"][0]["website_link"]).to eq "https://www.teststore1.com"

      expect(returned_json["stores"][1]["name"]).to eq "Test Store 2"
      expect(returned_json["stores"][1]["img_url"]).to eq "https://www.google.com"
      expect(returned_json["stores"][1]["category"]).to eq "Store"
      expect(returned_json["stores"][1]["description"]).to eq "Test Store 2 description"
      expect(returned_json["stores"][1]["address"]).to eq "Test Ave. City 0000"
      expect(returned_json["stores"][1]["website_link"]).to eq "https://www.teststore2.com"
    end
  end
  
  describe "GET#show" do
    it "should display info for specific store" do
      get :show, params: { id: first_store.id }
      returned_json = JSON.parse(response.body)
      
      expect(response.status).to eq(200)
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq(1)

      expect(returned_json["store"]["name"]).to eq "Test Store 1"
      expect(returned_json["store"]["img_url"]).to eq "https://www.google.com"
      expect(returned_json["store"]["category"]).to eq "Store"
      expect(returned_json["store"]["description"]).to eq "Test Store 1 description"
      expect(returned_json["store"]["address"]).to eq "Test Ave. City 0000"
      expect(returned_json["store"]["website_link"]).to eq "https://www.teststore1.com"
    end
  end
end