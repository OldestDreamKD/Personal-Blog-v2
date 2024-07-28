exports.entriesFull = function () {
  return entries;
};

exports.entriesPreview = function () {
  const entriesCopy = JSON.parse(JSON.stringify(entries)); // Deep copy using JSON

  for (var i = 0; i < entriesCopy.length; i++) {
    entriesCopy[i].entry = entriesCopy[i].entry.substring(0, 100);
  }

  return entriesCopy;
};

exports.pushEntry = function (entryInput) {
  entries.push(entryInput);
};

const entries = [
  {
    id: "1",
    title: "Day 1",
    entry:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem quaerat dolores consequuntur amet saepe dolorum dolorem hic illum, aspernatur nesciunt quisquam cumque architecto dicta, facere minima omnis veniam aperiam nobis sint incidunt? Consequuntur facilis nulla id quo hic sed aperiam, minima officiis impedit officia facere exercitationem quod culpa distinctio, eum blanditiis esse nihil veniam laudantium mollitia sapiente. Illum repellendus, deleniti fuga commodi a eligendi similique eum minus quos? Ipsam.",
  },
  {
    id: "2",
    title: "Day 2",
    entry:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab ea dolorem sed? Ratione dolorum, blanditiis in est sunt accusantium dolore quos voluptatibus, assumenda explicabo praesentium vitae atque facere. Dolore in dignissimos minima voluptas laboriosam ipsum quis fuga dolor, itaque at vel blanditiis provident voluptatibus dicta cumque, tenetur mollitia sed, repellendus neque hic! Ea sequi assumenda dolor deserunt saepe molestias consequatur, tenetur eligendi eos, corrupti blanditiis, neque dolorum dignissimos! Culpa, ab? Laudantium, fuga! Magni cupiditate earum eum commodi, ut architecto in rem quas repellendus ab cumque itaque animi maiores. Reprehenderit deserunt modi, voluptates, voluptatibus quae hic sapiente, totam officiis id repellat molestiae molestias illum autem eaque consequatur rerum nihil! Provident, modi nulla id itaque tempore temporibus ullam voluptatum sint. Tempora omnis maiores itaque illum cumque quis fugiat quas a iste dolor animi quibusdam minima ratione, pariatur similique vitae nostrum quaerat doloribus alias ab maxime necessitatibus voluptas ducimus quidem. Soluta, est.",
  },
];
