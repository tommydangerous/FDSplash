module PagesHelper
	
	def logo
		image_tag("fd_logo.png", :id => "logo")
	end
	
	def title
		base_title = "FlashingDeal"
		if @title.nil?
			base_title
		else
			"#{base_title} | #{@title}"
		end
	end
end
