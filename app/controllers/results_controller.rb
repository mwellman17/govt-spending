class ResultsController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user

  def index
  end

  def show
  end

  def authorize_user
    if !current_user.authorized?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
