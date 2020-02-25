function cone(radius, height) {
    let volume = (Math.PI * radius * radius * height) / 3;
    let totalSurfaceArea = Math.PI * radius * (Math.sqrt(radius * radius + height * height) + radius);
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
cone(3, 5);
cone(3.3, 7.8);