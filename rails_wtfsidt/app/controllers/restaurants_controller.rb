class RestaurantsController < ApplicationController
  before_action :authenticate_user

  def create
    results = YelpApi.search(params["data"]["zipcode"])
    favorited_results = results.select do |result|
      result.favorites.where(user_id: find_user_id).length == 1
      # instead of .length == 1 do .present?
    end
    favorite_ids = favorited_results.map do |result|
      result.id
    end
    render json: {restaurants: results, favorited_ids: favorite_ids}
  end

  private


  def find_user_id
    Auth.decode(request.env["HTTP_AUTHORIZATION"])[0]["user_id"]
  end
#   This should be a method called current_user which is in the application_controller.

end
