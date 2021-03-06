"use strict";
Page({
    data: {
        year: "2000",
        mouth: "00",
        arr: [],
        mytimes: 0
    },
    chagtime: function (event) {
        var value = event.detail.value;
        this.setData({
            year: value.split("-")[0],
            mouth: value.split("-")[1]
        });
        this.settime();
    },
    clear: function () {
        this.setData({
            year: "",
            mouth: "",
            arr: [],
            mytimes: 0
        });
    },
    onShow: function () {
        this.settime();
    },
    settime: function () {
        console.log;
        var _a = this.data, year = _a.year, mouth = _a.mouth;
        var oldtime = mouth === "00" ? new Date(year).getTime() : new Date(year + "-" + mouth).getTime();
        var newtime = new Date(new Date().getFullYear() + "-" + (new Date().getMonth() + 1)).getTime();
        if (newtime > oldtime) {
            var arr = newtime - oldtime;
            var sums = Math.ceil(arr / (1000 * 60 * 60 * 24 * 31));
            this.setData({
                mytimes: sums
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLElBQUk7UUFDWCxHQUFHLEVBQUUsRUFBRTtRQUNQLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxRQUFRLEVBQVIsVUFBUyxLQUFnQjtRQUNqQixJQUFBLDBCQUFLLENBQWlCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQ0QsS0FBSztRQUNELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsR0FBRyxFQUFDLEVBQUU7WUFDTixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFDRCxPQUFPLEVBQVA7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFBO1FBQ1AsSUFBQSxjQUEyQixFQUF6QixjQUFJLEVBQUUsZ0JBQW1CLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQVcsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFJLElBQUksU0FBSSxLQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6RyxJQUFJLE9BQU8sR0FBVyxJQUFJLElBQUksQ0FBSSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFJLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRyxJQUFJLE9BQU8sR0FBRyxPQUFPLEVBQUU7WUFDckIsSUFBSSxHQUFHLEdBQVcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNwQyxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQzlELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW50ZXJmYWNlIHRpbWVDaGFuZyB7XHJcbiAgZGV0YWlsOiB7XHJcbiAgICB2YWx1ZTogc3RyaW5nXHJcbiAgfVxyXG59XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICB5ZWFyOiBcIjIwMDBcIixcclxuICAgIG1vdXRoOiBcIjAwXCIsXHJcbiAgICBhcnI6IFtdLFxyXG4gICAgbXl0aW1lczogMFxyXG4gIH0sXHJcbiAgY2hhZ3RpbWUoZXZlbnQ6IHRpbWVDaGFuZykge1xyXG4gICAgbGV0IHsgdmFsdWUgfSA9IGV2ZW50LmRldGFpbFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgeWVhcjogdmFsdWUuc3BsaXQoXCItXCIpWzBdLFxyXG4gICAgICBtb3V0aDogdmFsdWUuc3BsaXQoXCItXCIpWzFdXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXR0aW1lKClcclxuICB9LFxyXG4gIGNsZWFyKCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgeWVhcjogXCJcIixcclxuICAgICAgICBtb3V0aDogXCJcIixcclxuICAgICAgICBhcnI6W10sXHJcbiAgICAgICAgbXl0aW1lczogMFxyXG4gICAgICB9KVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5zZXR0aW1lKClcclxuICB9LFxyXG4gIHNldHRpbWUoKSB7XHJcbiAgICBjb25zb2xlLmxvZ1xyXG4gICAgbGV0IHsgeWVhciwgbW91dGggfSA9IHRoaXMuZGF0YTtcclxuICAgIGxldCBvbGR0aW1lOiBudW1iZXIgPSBtb3V0aCA9PT0gXCIwMFwiID8gbmV3IERhdGUoeWVhcikuZ2V0VGltZSgpIDogbmV3IERhdGUoYCR7eWVhcn0tJHttb3V0aH1gKS5nZXRUaW1lKCk7XHJcbiAgICBsZXQgbmV3dGltZTogbnVtYmVyID0gbmV3IERhdGUoYCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS0ke25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDF9YCkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKG5ld3RpbWUgPiBvbGR0aW1lKSB7XHJcbiAgICAgIGxldCBhcnI6IG51bWJlciA9IG5ld3RpbWUgLSBvbGR0aW1lO1xyXG4gICAgICBsZXQgc3VtczogbnVtYmVyID0gTWF0aC5jZWlsKGFyciAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzEpKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIG15dGltZXM6IHN1bXNcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19