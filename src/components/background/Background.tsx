import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import { Stage, Layer, Rect, Ellipse } from 'react-konva'

export type BackgroundProps = {}

export type BackgroundState = {}

export const Background: FunctionComponent<BackgroundProps> = (props) => {

    const [screenSize, setScreenSize] = useState({
        x: window.innerWidth - 1,
        y: window.innerHeight - 1
    })

    let stageRef = useRef()
    let layerRef = useRef()

    // @ts-ignore
    console.log(stageRef.current)



    useEffect(() => {

        const handleResize = () => {
            setTimeout(() => {
                setScreenSize({
                    x: window.innerWidth - 1,
                    y: window.innerHeight - 1
                })
            },500 )
        }
        window.addEventListener('resize', handleResize)
        window.addEventListener('orientationchange', handleResize)

    })

    return (
        <div style={{position:"absolute"}}>
    <Stage height={screenSize.y} width={screenSize.x} ref={stageRef}>
        <Layer ref={layerRef}>
            
            {/* Bootom Layer */}
            <Rect
                x={0}
                y={0}
                width={screenSize.x}
                height={screenSize.y}
                fill="#5e558a"
            />

            {/* Middle Layer */}
            <Ellipse
                x={screenSize.x * 0.6}
                y={screenSize.y * 0.18}
                opacity={1}
                radiusX={screenSize.x * 0.7}
                radiusY={screenSize.y * 0.7}
                fill="#000000"
            />

            {/* Top Layer */}
            <Ellipse
                x={screenSize.x * 0.25}
                y={screenSize.y * 0.7}
                opacity={0.9}
                radiusX={screenSize.x * 0.8}
                radiusY={screenSize.y * 1}
                fill="#3c3c3b"
            />

        </Layer>
    </Stage>
    </div>
  );
}

