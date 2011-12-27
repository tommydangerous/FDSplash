require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get night" do
    get :night
    assert_response :success
  end

  test "should get day" do
    get :day
    assert_response :success
  end

end
