# Proximity Sensor Driver

An IR proximity sensor/switch using one GPIO interface.

## Device Model

- [E18-D80NK](https://rap.ruff.io/devices/E18-D80NK)

## Install

```sh
> rap device add --model E18-D80NK --id proximity
```

## Demo

Supposed \<device-id\> is `proximity` in the following demos.

```js
$('#proximity').on('near', function () { }); // get near event
$('#proximity').on('away', function () { }); // get away event
console.log($('#proximity').near); // get near status
console.log($('#proximity').away); // get away status
```

## API References

### Properties

- **near**

Get near status. The return value are `ture` or `false`.

- **away**

Get away status. The return value are `ture` or `false`.

### Events

- **near**

The event will be emitted when an obstacle comes in the detection range in front of IR sensor. The callback has no parameters.

- **away**

The event will be emitted when an obstacle leaves away the detection range of IR sensor. The callback has no parameters. The callback has no parameters.

## Supported OS

Test passed on Ruff and Ruff Lite.

## Note

The detection range is adjustable, 3cm - 80cm.