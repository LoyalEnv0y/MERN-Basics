interface SkeletonProps {
	times: number;
	width: number;
	height: number;
}

const Skeleton = ({ times, width, height }: SkeletonProps) => {
	const boxes = Array.from({ length: times });
	const style = {
		width: `${width}px`,
		height: `${height}px`,
	};

	return (
		<div className="skeleton-list">
			{boxes.map((_, i) => (
				<div key={i} style={style} className="skeleton"></div>
			))}
		</div>
	);
};

export default Skeleton;
