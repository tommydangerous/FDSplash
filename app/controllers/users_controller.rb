class UsersController < ApplicationController
	
  def new
  	@user = User.new
  	@time = Time.new
  	@title = "First To Know"
  end
  
  def create
  	@user = User.new(params[:user])
  	if @user.save
#  		UserMailer.registration_confirmation(@user).deliver unless Rails.env.development?
  		respond_to do |format|
  			format.html { redirect_to root_path }
  			format.js
  		end
  	else
  		respond_to do |format|
  			format.html { redirect_to root_path }
  			format.js
  		end
  	end
  end
end
