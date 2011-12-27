FDSplash::Application.routes.draw do
  resources :users, :only => [:new, :create]
  
	root :to => 'users#new'
	
	match '*url' => 'users#new'
end
