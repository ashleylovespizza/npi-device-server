namespace :server do
  task :start do |t, args|
    puts "*** Starting server... ***"
    system "coffee app.coffee"
    puts "*** Done! ***"
  end

  task :coffee_watch_server do |t, args|
    puts "*** Starting coffeescript server watcher ***"
    system('coffee -o ./node_modules/npi_server -cw ./node_modules/npi_server')
    puts "*** Done! ***"
  end


  task :coffee_watch_website do |t, args|
    puts "*** Starting coffeescript website watcher ***"
    system('coffee -o ./node_modules/npi_website -cw ./node_modules/npi_website')
    puts "*** Done! ***"
  end
end