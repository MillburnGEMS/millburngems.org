# millburngems.org
Official website of Millburn GEMS.

## Installing Jekyll
1. Windows: Check out Julian Thilo's awesome tutorial [here](http://jekyll-windows.juthilo.com/).
2. Mac: Install RubyGems [here](https://rubygems.org/pages/download). Then, open Terminal and run the following:
```
gem install jekyll
```

## Compiling Jekyll Sites
1. On the command line, `cd` into the directory `../../millburngems.org`, wherever you have this repository stored.
2. If there isn't one already, create a new directory at `/millburngems.org/_site`. But remember, don't `cd` into the directory.
```
mkdir _site
```
2. Run the following:
```
jekyll serve --watch
```
3. By default, this compiles the Jekyll site and starts a server at `localhost:4000` (port 4000), serving the files under the `_site` directory. Navigate to `localhost:4000` in a browser, such as Chrome, to view the site.
4. The `--watch` switch tells Jekyll to constantly watch for and update any changes that you make in the site's files while the server is running.
5. To stop the server, use `^C` (control-C) to exit the process. Run `jekyll serve --watch` to start the server again when you need it.

## Transfer Files to Server
So the site looks fabulous, but you want to see it live at millburngems.org. We'll do this over FTP (File Transfer Protocol).

1. Download and install an FTP client, such as [FileZilla](https://filezilla-project.org/).
2. Open FileZilla and Site Manager (command-S or File > Site Manager on Macs) to create and connect to a new site.
3. You know where the credentials are :)
4. The left side of FileZilla shows your local files; the right shows the server's files. Navigate to `../millburngems.org/_site` and drag and drop **only the files in /_site** over to the `/` directory on the right.
5. Head over to [millburngems.org](http://millburngems.org) and admire the beauty of your work.
