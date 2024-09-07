# YTAudio Source
This is a simple REST service that provides the audio file for a given YouTube video.

## Endpoints
### GET /ping
Returns a `pong`, used to check wether the service is running.

**Example**
```json
{
  "ping": "pong"
}
```

### GET /:videoID/
Requires the YouTube video ID and returns meta data about the video and the audio file.

**Example**
```json
// /jNQXAC9IVRw

{
  "url": "https://rr2---sn-n0ogpnx-b85s.googlevideo.com/videoplayback?expire=1725706829&ei=7d3bZoXaKeyD6dsPrs_ROQ&ip=2a02%3Aaa14%3Aa101%3Ab280%3Aa13f%3A46d%3A7b19%3Abff6&id=o-ABm7Vl6fbbtXIcQUcCfooLzgdWTdbmOWZKjLFWyX7dHa&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=VD&mm=31%2C29&mn=sn-n0ogpnx-b85s%2Csn-1gi7znek&ms=au%2Crdu&mv=m&mvi=2&pcm2cms=yes&pl=35&initcwndbps=1526250&bui=AQmm2ey1l63bmZRNRSRSnLv48oRJyh1Z-4S0Jb5Gbkg2llmQY3t6eV-6Ja9xzGpsDBizPl2fGnYF2WOE&spc=Mv1m9iykBR9IuToMM7kWWNtq8ErbC_tiN9fC8IPF7U032HaBlPD0jjdNp1Ay&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=K__tIpkkpYyN3kRlXamsNjkQ&rqh=1&gir=yes&clen=309197&dur=19.063&lmt=1680501251736219&mt=1725685007&fvip=2&keepalive=yes&c=WEB&sefc=1&txp=4530434&n=diF3TYOJVrP2EURQQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAMUE1RPHCKI-bMskNofun14PRRraj7QXOnCYQTIGxE9EAiEA6brn8o6WRb7Q3uF_avX2Z5AIGmJxEB4KnkewfIQ34g8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=ABPmVW0wRQIhAKy6tjPZ264tePfjQs0lFhe5xBlIcMFznfZV2ZMhv7B_AiB3frxCT5zSYqXEBwA7t4vk2XJU2J7r-xTF1A3NfYozfA%3D%3D",
  "formats": {
    "audio/mp4": "https://rr2---sn-n0ogpnx-b85s.googlevideo.com/videoplayback?expire=1725706829&ei=7d3bZoXaKeyD6dsPrs_ROQ&ip=2a02%3Aaa14%3Aa101%3Ab280%3Aa13f%3A46d%3A7b19%3Abff6&id=o-ABm7Vl6fbbtXIcQUcCfooLzgdWTdbmOWZKjLFWyX7dHa&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=VD&mm=31%2C29&mn=sn-n0ogpnx-b85s%2Csn-1gi7znek&ms=au%2Crdu&mv=m&mvi=2&pcm2cms=yes&pl=35&initcwndbps=1526250&bui=AQmm2ey1l63bmZRNRSRSnLv48oRJyh1Z-4S0Jb5Gbkg2llmQY3t6eV-6Ja9xzGpsDBizPl2fGnYF2WOE&spc=Mv1m9iykBR9IuToMM7kWWNtq8ErbC_tiN9fC8IPF7U032HaBlPD0jjdNp1Ay&vprv=1&svpuc=1&xtags=drc%3D1&mime=audio%2Fmp4&ns=K__tIpkkpYyN3kRlXamsNjkQ&rqh=1&gir=yes&clen=309197&dur=19.063&lmt=1680501255309737&mt=1725685007&fvip=2&keepalive=yes&c=WEB&sefc=1&txp=4530434&n=diF3TYOJVrP2EURQQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAI4ngYh92VPzyF5zhIhcx6H54ko5ABp9ypE2-pQ6TO0IAiAePHjCluy-MukWi157NkkwekoY9C6-0zYqxtnR6BQJfg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=ABPmVW0wRQIhAKy6tjPZ264tePfjQs0lFhe5xBlIcMFznfZV2ZMhv7B_AiB3frxCT5zSYqXEBwA7t4vk2XJU2J7r-xTF1A3NfYozfA%3D%3D",
    "audio/webm": "https://rr2---sn-n0ogpnx-b85s.googlevideo.com/videoplayback?expire=1725706829&ei=7d3bZoXaKeyD6dsPrs_ROQ&ip=2a02%3Aaa14%3Aa101%3Ab280%3Aa13f%3A46d%3A7b19%3Abff6&id=o-ABm7Vl6fbbtXIcQUcCfooLzgdWTdbmOWZKjLFWyX7dHa&itag=249&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=VD&mm=31%2C29&mn=sn-n0ogpnx-b85s%2Csn-1gi7znek&ms=au%2Crdu&mv=m&mvi=2&pcm2cms=yes&pl=35&initcwndbps=1526250&bui=AQmm2ey1l63bmZRNRSRSnLv48oRJyh1Z-4S0Jb5Gbkg2llmQY3t6eV-6Ja9xzGpsDBizPl2fGnYF2WOE&spc=Mv1m9iykBR9IuToMM7kWWNtq8ErbC_tiN9fC8IPF7U032HaBlPD0jjdNp1Ay&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=K__tIpkkpYyN3kRlXamsNjkQ&rqh=1&gir=yes&clen=112596&dur=19.021&lmt=1680501252731444&mt=1725685007&fvip=2&keepalive=yes&c=WEB&sefc=1&txp=4530434&n=diF3TYOJVrP2EURQQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAP8Z9mfx--OiJylH4t0lLxAMi0Nq8atl3io6ssdr-XB_AiAFlfgawq69TudhYrpcJ3ix2b82beJsCf85NltHbg1G7w%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=ABPmVW0wRQIhAKy6tjPZ264tePfjQs0lFhe5xBlIcMFznfZV2ZMhv7B_AiB3frxCT5zSYqXEBwA7t4vk2XJU2J7r-xTF1A3NfYozfA%3D%3D"
  },
  "author": "jawed",
  "title": "Me at the zoo",
  "description": "10mph vs mach 10 Airplane Fly-by\nhttps://www.youtube.com/watch?v=oPD-JIq0FQ8\n\n00:00 Intro\n00:05 The cool thing\n00:17 End",
  "images": [
    {
      "url": "https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AG-AoAC8AGKAgwIABABGFQgWChlMA8=&rs=AOn4CLBcyZ-Cor8dvGK1qJ3ywX4kkHOcWQ",
      "width": 168,
      "height": 94
    },
    {
      "url": "https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg?sqp=-oaymwE1CMQBEG5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AG-AoAC8AGKAgwIABABGFQgWChlMA8=&rs=AOn4CLB8Is3q47Y0Mo2GlR1BzD5nWYsLLQ",
      "width": 196,
      "height": 110
    },
    {
      "url": "https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgKAAvABigIMCAAQARhUIFgoZTAP&rs=AOn4CLDUVCjLi8byWhlOjV256685mLxufg",
      "width": 246,
      "height": 138
    },
    {
      "url": "https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgKAAvABigIMCAAQARhUIFgoZTAP&rs=AOn4CLAfjfzgmthOoLSY1qA_1FuLjNpwWw",
      "width": 336,
      "height": 188
    }
  ]

```

### GET /play/:url/
Takes an URI encoded URL and pipes the request to the provided URL. Used as a proxy to stream the audio file.

## Self-Hosting
YTAudio source is a nodeJS application that can be run on any server that supports nodeJS. To run the application, clone the repository, install the dependencies and start the application.

```bash
git clone https://github.com/nico-martin/yt-audio-source.git
cd yt-audio-source
npm install
npm run start
```
The application is now running on PORT 2005 or the port you defined in your env `PORT`.

There is also a docker image available that can be used to run the application in a container.
