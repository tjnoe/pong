import {
  useType,
  Vector,
  Geometry,
  Polygon,
  Physics,
  useNewComponent,
  useDraw
} from "@hex-engine/2d";

export default function Paddle(position: Vector) {
  useType(Paddle);

  const geometry = useNewComponent(() =>
    Geometry({
      shape: Polygon.rectangle(new Vector(20, 70)),
      position
    })
  );

  useNewComponent(() => Physics.Body(geometry, { isStatic: true }));

  useDraw(context => {
    context.fillStyle = "blue";
    geometry.shape.draw(context, "fill");
  });
}
