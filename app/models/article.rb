class Article < ActiveRecord::Base
  has_many :comments, dependent: :destroy
  validates :title, presence: true,
                  length: {
                    minimum: 5,
                    maximum: 55
                  }
  validates :text, presence: true,
                  length: {
                    minimum: 25,
                    maximum: 3000
                  }
end
