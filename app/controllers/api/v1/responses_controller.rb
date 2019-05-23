class Api::V1::ResponsesController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user
  protect_from_forgery unless: -> { request.format.json? }

  def create
    response = JSON.parse(request.body.read)
    new_json = Response.new({ json: response })
    if new_json.save
      render json: new_json.json
    else
      render json: { error: new_json.errors.full_messages.join(', ') }
    end
  end

  def authorize_user
    if !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
