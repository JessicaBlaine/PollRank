# == Schema Information
#
# Table name: polls
#
#  id         :integer          not null, primary key
#  question   :string           not null
#  string_id  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Poll < ApplicationRecord
  validates :question, presence: true

  after_create :generate_string_id

  private
  def generate_string_id
    self.string_id = ShortUrlHelper.encode(self.id)
    self.save
  end
end
