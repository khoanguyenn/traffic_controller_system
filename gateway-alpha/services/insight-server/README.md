# Overview

## Architecture Design

```plantuml

artifact  "AI Portal" {
    node "Gateway" as gateway
    node "Socket.IO server" as socketio
    node "Restful API server" as restapi
    node "Nginx RTMP Server" as rtmp
    database  Database as db
}

```

## Streaming Video Camera

```plantuml
@startuml
skinparam ParticipantPadding 20
skinparam BoxPadding 30

box server side
  participant "Jetson TX1" as tx1
  participant "Restful API Server" as restapi
  participant "RTMP Server" as rtmp
end box

box client side
  participant "Web" as web
end box

alt Establish streaming
  tx1 -> restapi: GET <streaming url>
  restapi --> tx1: 200 OK <url>
end

alt streaming
  note left tx1
    TX1 stream video via url
  end note

  tx1 -> rtmp: stream data 0
  tx1 -> rtmp: stream data 1
  ...
  tx1 -> rtmp: stream data n
end

...

alt web
  web -> restapi: GET streaming url
  restapi --> web: 200 OK <url>

  web -> web: listen data from url
  rtmp -> web: data stream 0
  rtmp -> web: data stream 1
  ...
  rtmp -> web: data stream n
end

@enduml
```

## Streaming AI

```plantuml
skinparam ParticipantPadding 20
skinparam BoxPadding 30

box streaming data
  participant "Jetson TX1" as tx1
  participant "Socket.IO Srver" as socket
end box

box database
  participant "Database" as db
end box

box server
  participant "Restful API Server" as restapi
  participant "Web" as web
end box

alt stream AI
  tx1 -> socket: Send AI data 0
  socket --> db: insert into ...
  tx1 -> socket: Send AI data 1
  socket --> db: insert into ...
  ...
  tx1 -> socket: Send AI data n
  socket --> db: insert into ...
end

...

web -> restapi: GET statistic data
restapi -> db: aggregate data
db --> restapi: Data
restapi --> web: 200 data
```
