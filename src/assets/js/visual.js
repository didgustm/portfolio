import Matter from 'matter-js';

export const visualBall = () => {
    let once = false;
    let particles = [];
    const visual = document.querySelector('.visual');
    const Engine = Matter.Engine,
                Render = Matter.Render,
                Runner = Matter.Runner,
                Bodies = Matter.Bodies,
                Common = Matter.Common,
                Composite = Matter.Composite,
                Constraint = Matter.Constraint,
                Event = Matter.Events;

    const engine = Engine.create(),
                runner = Runner.create(),
                world = engine.world;

    const render = Render.create({
        element: visual,
        engine: engine,
        pixelRatio: window.devicePixelRatio,
        options: {
            width: window.innerWidth,
            height: visual.clientHeight,
            wireframes: false,
            background: '#272727'
        }
    });

    Render.run(render);
    Runner.run(runner, engine);

    const staticOptions = {
        restitution: 0.8,
        friction: 0,
        label: 'static'
    }

    world.gravity.y = 0.9;

    let triA = Bodies.polygon(visual.clientWidth * 0.8, visual.clientHeight * 0.38, 3, 170, staticOptions),
        ballB = Bodies.circle(visual.clientWidth * 0.5, visual.clientHeight * 0.44, 110, staticOptions),
        partA = Bodies.rectangle(0, 0, 150, 30, {
            label: 'cross'
        }),
        partB = Bodies.rectangle(0, 0, 30, 150, {
            render: partA.render,
            label: 'cross'
        }),
        cross = Matter.Body.create({
            parts: [partA, partB],
            restitution: 0.8,
            friction: 0
        }),
        boxA = Bodies.rectangle(visual.clientWidth * 0.7, visual.clientHeight * 0.78, 220, 70, staticOptions),
        conA = Constraint.create({ 
            pointA: { x: visual.clientWidth * 0.8, y: visual.clientHeight * 0.38 },
            bodyB: triA,
            length: 0,
            render: {visible: false}
        }),
        conB = Constraint.create({ 
            pointA: { x: visual.clientWidth * 0.5, y: visual.clientHeight * 0.44 },
            bodyB: ballB,
            pointB: { x: -50, y: -50 },
            length: 0,
            stiffness: 0.001,
            render: {visible: false}
        }),
        conD = Constraint.create({
            pointA: {x: visual.clientWidth * 0.2, y:visual.clientHeight * 0.3},
            bodyB: cross,
            length: 0,
            render: {visible: false}
        }),
        conC = Constraint.create({ 
            pointA: { x: visual.clientWidth * 0.7, y: visual.clientHeight * 0.78 },
            bodyB: boxA,
            length: 0,
            damping: 0.01,
            stiffness: 0.05,
            render: {visible: false}
        });
    Matter.Body.rotate(boxA, Math.PI / -8);
    Matter.Body.rotate(cross, Math.PI / 8);

    Composite.add(world, [ triA, ballB, boxA, conA, conB, conC, cross, conD ]);

    
    function updateParticle(){
        for(var i = 0; i < 10; i++){
            let x = Common.random(render.canvas.width * 0.4, render.canvas.width * 0.82),
                y = Common.random(-30, 30),
                size = Common.random(10, 20);
            const p = Bodies.circle(x, y, size, {
                restitution: 0.4,
                friction: 0,
                label: 'particle'
            });
            particles.push(p)
        }
    }

    particles.length = 0;
    updateParticle();
    Composite.add(world, particles);

    if(visual.clientWidth <= 1000 && !once){
        Matter.Body.scale(triA, 0.8, 0.8);
        Matter.Body.scale(ballB, 0.8, 0.8);
        Matter.Body.scale(boxA, 0.8, 0.8);
        Matter.Body.scale(cross, 0.7, 0.7);
        particles.forEach(x => {
            Matter.Body.scale(x, 0.8, 0.8);
        })
        once = true
    }
    if(visual.clientWidth <= 500){
        Matter.Body.setPosition(ballB, Matter.Vector.create(visual.clientWidth * 0.3, visual.clientHeight * 0.6));
        Matter.Body.set(conB, 'pointA', { x: visual.clientWidth * 0.3, y: visual.clientHeight * 0.6 });
    }

    Event.on(engine, 'collisionStart', (e) => {
        const pairs = e.pairs;
        var bodyA = pairs[0].bodyA,
            bodyB = pairs[0].bodyB;
        
        if(bodyA.label == 'static'){
            bodyA.render.fillStyle = bodyB.render.fillStyle
        }
        if(bodyA.label == 'cross'){
            cross.parts.forEach(x => {
                x.render.fillStyle = bodyB.render.fillStyle;
            })
        }
    })

    Event.on(render, 'afterRender', () => {
        particles.forEach(p => {
            if (p.position.y > render.canvas.height) {
                Matter.Body.setVelocity(p, { x: 0, y: Common.random(-30, 30) });
                var x = Common.random(
                    visual.clientWidth * 0.4, visual.clientWidth * 0.82
                );
                var y = Common.random(-render.canvas.height, 0);
                Matter.Body.setPosition(p, { x: x, y: y });
            }
        })
    });
    function onResize(visual){
        
        render.canvas.width = window.innerWidth;
        render.canvas.height = visual.clientHeight;
    
        Matter.Body.setPosition(triA, Matter.Vector.create(visual.clientWidth * 0.8, visual.clientHeight * 0.38));
        Matter.Body.setPosition(boxA, Matter.Vector.create(visual.clientWidth * 0.7, visual.clientHeight * 0.78));

        Matter.Body.set(conA, 'pointA', { x: visual.clientWidth * 0.8, y: visual.clientHeight * 0.38 });
        Matter.Body.set(conD, 'pointA', { x: visual.clientWidth * 0.3, y: visual.clientHeight * 0.4 });
        Matter.Body.set(conC, 'pointA', { x: visual.clientWidth * 0.7, y: visual.clientHeight * 0.78 })

        if(visual.clientWidth <= 1000 && !once){
            Matter.Body.scale(triA, 0.8, 0.8);
            Matter.Body.scale(ballB, 0.8, 0.8);
            Matter.Body.scale(boxA, 0.8, 0.8);
            Matter.Body.scale(cross, 0.7, 0.7);
            particles.forEach(x => {
                Matter.Body.scale(x, 0.8, 0.8)
            })
            once = true
        } else if(visual.clientWidth > 1000 && once){
            Matter.Body.scale(triA, 1.2, 1.2);
            Matter.Body.scale(ballB, 1.2, 1.2);
            Matter.Body.scale(boxA, 1.2, 1.2);
            Matter.Body.scale(cross, 1.3, 1.3);
            particles.forEach(x => {
                Matter.Body.scale(x, 1.2, 1.2)
            })
            once = false
        }

        if(visual.clientWidth <= 500){
            Matter.Body.setPosition(ballB, Matter.Vector.create(visual.clientWidth * 0.3, visual.clientHeight * 0.6));
            Matter.Body.set(conB, 'pointA', { x: visual.clientWidth * 0.3, y: visual.clientHeight * 0.6 });
        } else{
            Matter.Body.setPosition(ballB, Matter.Vector.create(visual.clientWidth * 0.5, visual.clientHeight * 0.44));
            Matter.Body.set(conB, 'pointA', { x: visual.clientWidth * 0.5, y: visual.clientHeight * 0.44 });
        }

    }

    window.addEventListener('resize', () => onResize(visual))
}