# отвечает за пути сайта (resources добавляет все возможные get запросы к файлам
# находящимся в папке с название после resources)
Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :users
  resources :posts do
    resources :comments
    resources :likes
  end

  controller :sessions do
    get 'login' => :new
    post 'login' => :create
    delete 'logout' => :destroy
  end
  root 'posts#index', as: 'home'
end
