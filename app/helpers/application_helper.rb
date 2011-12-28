module ApplicationHelper
	
	def day_bg
		image_tag("/assets/day.jpg", :class => "background", :id => "day")
	end
	
	def night_bg
		image_tag("/assets/night.jpg", :class => "background", :id => "night")
	end
	
	def sun_img
		image_tag("/assets/sun.png", :id => "sun")
	end
	
	def moon_img
		image_tag("/assets/moon.png", :id => "moon")
	end
	
	def time
		if @time < Time.parse("6:00 PM") && @time >= Time.parse("6:00 AM")
			day_bg
		else
			night_bg
		end
	end
end
