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

  const physics = useNewComponent(() =>
    Physics.Body(geometry, {
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
      restitution: 1
    })
  );
  physics.setVelocity(new Vector(-3, 0));

  useDraw(context => {
    context.fillStyle = "red";
    geometry.shape.draw(context, "fill");
  });
}
