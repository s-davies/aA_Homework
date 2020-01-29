class UsersController < ApplicationController
    before_action :redirect_if_logged_in, only: [:new]
    before_action :ensure_logged_in, only: [:edit, :update, :destroy]
    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            log_in_user!(@user)
            redirect_to user_url(@user)
        else
            redirect_to new_user_url
        end
    end

    def edit
        @user = User.find(params[:id])

        render :edit
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            redirect_to user_url(@user)
        else
            redirect_to edit_user_url(@user)
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        redirect_to users_url
    end

    def redirect_if_logged_in
        if logged_in?
            redirect_to users_url
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :session_token)
    end
end
