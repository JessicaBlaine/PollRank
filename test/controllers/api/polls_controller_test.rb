require 'test_helper'

class Api::PollsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_polls_create_url
    assert_response :success
  end

end
