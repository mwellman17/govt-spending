class HomesController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user

  def index
  end

  def authorize_user
    if !current_user.authorized?
      flash[:notice] = "You must be authorized to continue."
    else
      redirect_to results_path
    end
  end
end
