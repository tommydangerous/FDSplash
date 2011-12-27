class UserMailer < ActionMailer::Base
  default from: "flashingdeal@gmail.com"
  
  def registration_confirmation(user)
  	@user = user
  	mail(:to => "#{user.name} <flashingdeal@gmail.com>", :subject => "FlashingDeal User Sign Up")
  end
end
