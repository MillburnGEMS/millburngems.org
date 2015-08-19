# millburngems.org
Official website of Millburn GEMS.

## Installing Jekyll
1. On a Windows: Check out Julian Thilo's awesome tutorial [here](http://jekyll-windows.juthilo.com/).
2. On a Mac: Install RubyGems [here](https://rubygems.org/pages/download). Then, open Terminal and run the following:
```
gem install jekyll
```

## Compiling Jekyll Sites
1. On the command line, `cd` into the directory `../../millburngems.org`, where you have this repository stored.
2. Run the following:
```
jekyll serve --watch
```
3. By default, this should start a server at `localhost:4000` (port 4000). Navigate to `localhost:4000` in a browser, such as Chrome, to view the site.
4. `--watch` makes it so that Jekyll constantly watches for and updates any changes in the site's files that you make while the server is running.
5. To stop the server, use `^C` (control-C) to exit the process. Run `jekyll serve --watch` to start the server again when you need it.

## Transfer Files to millburngems.org
So the site looks fabulous, but you want to get the files over to millburngems.org. We'll do this over FTP (File Transfer Protocol).

1. Download and install an FTP client, such as [FileZilla](https://filezilla-project.org/).
2. Open FileZilla and Site Manager (command-S or File > Site Manager on Macs) to create and connect to a new site.
3. You know where the credentials are :)
