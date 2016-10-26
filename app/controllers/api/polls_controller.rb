class Api::PollsController < ApplicationController
  def create
    @poll = Poll.new(poll_params)
    if @poll.save
      render :show
    else
      render json: @poll, status: :unprocessable_entity
    end
  end

  def show
    @poll = Poll.find_by(string_id: params[:id])
    if @poll
      render :show
    else
      render json: { error: "not_found" }, status: 404
    end
  end

  private
  def poll_params
    params.require(:poll).permit(:question, :options)
  end
end
