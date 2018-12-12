require 'sinatra'
require "sinatra/reloader"
register Sinatra::Reloader

get '/' do
  erb :search, :layout => :engine_layout
end


post '/making_search' do
    require 'googlebooks'
    # book = GoogleBooks.search(params['query'])
    @books = GoogleBooks.search(params['query'])
    # @title = GoogleBooks.search(params['query']).map {|i| i.title}
    # @author = GoogleBooks.search(params['query']).map {|i| i.authors}
    # @publishDate = GoogleBooks.search(params['query']).map {|i| i.published_date}
    
    erb :results, :layout =>  :engine_layout
end