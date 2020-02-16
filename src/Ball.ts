import {
  useType,
  useNewComponent,
  Geometry,
  Physics,
  Vector,
  Circle,
  useDraw
} from "@hex-engine/2d";

export default function Ball(position: Vector) {
  useType(Ball);

  const geometry = useNewComponent(() =>
    Geometry({ shape: new Circle(10), position: position.clone() })
  );

  useNewComponent(() => Physics.Body(geometry));

  useDraw(context => {
    context.fillStyle = "red";
    geometry.shape.draw(context, "fill");
  });
}
