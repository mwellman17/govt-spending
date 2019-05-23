class Api::V1::ResultsController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user
  protect_from_forgery unless: -> { request.format.json? }

  def index
    responses = Response.all
    render json: responses, each_serializer: ResponseIdSerializer
  end

  def show
    response = Response.find(params['id'])
    render json: response.json['results']
  end

  def authorize_user
    if !current_user.authorized?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
