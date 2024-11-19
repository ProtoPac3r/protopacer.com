# Zero to Production in Zig

What does the httpz handler look like and what is its function signature? For
now we have:

```zig
fn greet(req: *httpz.Request, res: *httpz.Response) !void {
    const name: req.param("name") orelse "world";
    try std.fmt.format(res.writer(), "Hello, {s}!\n", .{name});
}
```

[Memory and Arents](https://github.com/karlseguin/http.zig/tree/zig-0.13?tab=readme-ov-file#memory-and-arenas)

We allocate for the response body that must remain valid after the action
returns. I believe format() is what allocates since it's backed by writer()
which is backed by an allocator.

The handler isn't returning anything yet. It run synchronously, and we
effectively write directly to the response using the provided writer.

## Integration testing

We verified our `/health-check` endpoint manually to ensure things were running,
but that's time-consuming and so we want to automate.

