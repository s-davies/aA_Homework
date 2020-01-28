class UserMailer < ApplicationMailer
    default from: 'everybody@appacademy.io'

    def welcome_email(user)
        # your code here
        @user = user
        @url  = 'http://99cats.com/login'
        mail(to: user.username, subject: 'Welcome to 99cats')
    end
end
