class User < ActiveRecord::Base
  attr_accessible :name, :avatar
  mount_uploader :avatar, AvatarUploader
  attr_accessible :crop_x, :crop_y, :crop_w, :crop_h
    attr_accessor :crop_x, :crop_y, :crop_w, :crop_h

  after_update :crop_avatar

  def crop_avatar
  	avatar.recreate_versions! if crop_x.present?	
  end
end
