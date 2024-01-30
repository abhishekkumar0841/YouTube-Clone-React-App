# YouTube Clone React App

- Initialize app using --> npm create vite@latest
- Setup tailwind css 
- Install React router DOM 
- Install redux toolkit and react redux
- Install react-icons
- Create .env file and keeping the VITE_APP_YOUTUBE_VIDEOS_API inside this
- Setting up rapidAPI for fetching youtube videos data
- Install Axios for fetching API
- Body.jsx created
- Showing video card with video thumbnail 
- Format the publish date and also show on video card
- Making Sidebar component
- Adding Browser router functionality
- Making Layout component
- Styling to looks like just youtube
- Create videoSlice
- Create loadingSlice
- Create store of slices
- Shifting the logic of setting initialVideo state in redux
- Creating InitialVideoShimmer and show it before video load
- Managing the video category from redux
- Add the functionality to change video category from sidebar
- Add video watching page for specific video and also show details of video
- Managing redux state for the sidebar toggle
- Adding the toggle functionality of sidebar for the body and the video page also
- Adding the ScrollToTop.jsx component for resetting the default scroll to zero (top) when navigating between pages
- Showing hover effect and adding active class to the buttons of sidebar
- Implement search functionality with Debouncing
- Create SearchResultsBox
- Create SearchResultsPage
- Adding YouTube_Search_API in constants for showing related search suggestions on the basis of user input
- Installing React-player npm package and use on the place of iframe
- Fetching video details and related video with different new url
- Showing likes count with formatting like youTube
- Adding likes and dislike functionality (dummy)
- Create LikeComponent
- Add VideoDetailsDesc component and show description, publish date, total views with collapse functionality
- Install dateformat npm package for formatting date
- Add RelatedVideoCardShimmer
- Add VideoPageShimmer
- Showing related videos list on video page
- Add Speech Recognition functionality for voice search
- Creating SearchComponent and shifting all search input logic in that
- Making Channel logo link for taking user to channel page
- Making Channel page and showing all channel related details on it
- Make ChannelTemplate.jsx
- Create channelSlice.js for setting channel details in it