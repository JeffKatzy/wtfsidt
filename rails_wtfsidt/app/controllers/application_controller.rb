class ApplicationController < ActionController::API
  before_action :authenticate_user, except: [:new, :create]

  def authenticate_user
    render json: {error: "Unauthorized User"} unless signed_in?
  end

  def signed_in?
    !!current_user
  end

  def current_user
    byebug
    User.find(Auth.decode(request.env["HTTP_AUTHORIZATION"])[0]["user_id"]) if request.env["HTTP_AUTHORIZATION"].present?
  end
end
