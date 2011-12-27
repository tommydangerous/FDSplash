class User < ActiveRecord::Base
	attr_accessible :name, :email
	
	email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

	validates :email, :presence => { :message => "How will we contact you with no email" }
	validates	:email, :format => { :with => email_regex, :message => "Please enter in your real email address" }
	validates	:email, :uniqueness => { :case_sensitive => false, :message => "Oops! Someone already signed up with this email address" }
end