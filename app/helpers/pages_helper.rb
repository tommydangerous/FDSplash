module PagesHelper
	
	def logo
		image_tag("fds_logo.png", :id => "logo")
	end
	
	def title
		base_title = "FlashingDeals"
		if @title.nil?
			base_title
		else
			"#{base_title} | #{@title}"
		end
	end
end
