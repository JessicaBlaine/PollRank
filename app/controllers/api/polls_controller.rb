class Api::PollsController < ApplicationController
  def create
    @poll = Poll.new(poll_params)
    if @poll.save
      render :show
    else
      render json: @poll, status: :unprocessable_entity
    end
  end

  private
  def poll_params
    params.require(:poll).permit(:question)
  end
end
