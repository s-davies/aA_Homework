class BandsController < ApplicationController

    before_action :ensure_logged_in
    def index
        @bands = Band.all
        render :index
    end

    def show
        @band = Band.find(params[:id])
        render :show
    end

    def new
        @band = Band.new
        render :new
    end

    def create
        @band = Band.new(band_params)
        if @band.save
            redirect_to band_url(@band)
        else
            redirect_to new_band_url
        end
    end

    def edit
        @band = Band.find(params[:id])

        render :edit
    end

    def update
        @band = Band.find(params[:id])
        if @band.update(band_params)
            redirect_to band_url(@band)
        else
            redirect_to edit_band_url(@band)
        end
    end

    def destroy
        @band = Band.find(params[:id])
        @band.destroy
        redirect_to bands_url
    end

    private

    def band_params
        params.require(:band).permit(:name)
    end


end
