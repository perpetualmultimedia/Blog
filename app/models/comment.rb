class Comment < ActiveRecord::Base
  belongs_to :article
  validates :commenter, presence: true,
                  length: {
                    minimum: 3,
                    maximum: 25
                  }
  validates :body, presence: true,
                  length: {
                    minimum: 2,
                    maximum: 165
                  }
end
