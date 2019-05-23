class ResponsesController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user

  def index
  end

  def authorize_user
    if !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
